"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import {
  MessageSquare,
  ThumbsUp,
  MessageCircle,
  Flag,
  Search,
  PlusCircle,
  Share2,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  Filter,
  User,
  AlertCircle,
  X,
  Send,
  Sparkles,
} from "lucide-react";

interface Comment {
  id: string;
  author: string;
  batch: string;
  timestamp: string;
  content: string;
  likes: number;
  userLiked?: boolean;
}

interface Post {
  id: string;
  title: string;
  author: string;
  batch: string;
  memberType: string;
  zone: string;
  timestamp: string;
  category: string;
  tags: string[];
  content: string;
  likes: number;
  userLiked?: boolean;
  repliesCount: number;
  flagged?: boolean;
  comments: Comment[];
}

import { handleCreateQaPostAction } from "@/app/actions";

export interface DbReplyData {
  id: string;
  content: string;
  likesCount: number;
  createdAt: string | Date;
  user?: {
    memberProfile?: {
      fullName?: string | null;
      batch?: string | null;
    } | null;
  } | null;
}

export interface DbPostData {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string | null;
  likesCount: number;
  flagged: boolean;
  createdAt: string | Date;
  user?: {
    memberProfile?: {
      fullName?: string | null;
      batch?: string | null;
      institute?: string | null;
      presentAddressZone?: string | null;
      membershipType?: string | null;
    } | null;
  } | null;
  replies: DbReplyData[];
}

export interface MemberForumClientProps {
  currentMember?: { email: string } | null;
  dbPosts: DbPostData[];
}

export function MemberForumClient({
  currentMember = { email: "member@itetbd.net" },
  dbPosts = [],
}: MemberForumClientProps) {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [activeReplyPostId, setActiveReplyPostId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  // New post form state
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Dyeing & Finishing");
  const [newTags, setNewTags] = useState("");
  const [newContent, setNewContent] = useState("");

  // Transform live dbPosts into Post items
  const formatPosts = (posts: typeof dbPosts): Post[] => {
    return posts.map((p) => {
      const profile = p.user?.memberProfile;
      const authorName = profile?.fullName || "Engr. ITET Member";
      const batch = profile?.batch
        ? `${profile.batch} (${profile.institute?.split(" ")[0] || "ITET"})`
        : "34th Batch (BUTEX)";
      const memberType =
        profile?.membershipType === "LIFE"
          ? "Life Member"
          : profile?.membershipType === "GENERAL"
          ? "General Member"
          : "Student Member";
      const zone = profile?.presentAddressZone || "Dhaka Zone";

      const comments: Comment[] = p.replies.map((r) => {
        const rProfile = r.user?.memberProfile;
        return {
          id: r.id,
          author: rProfile?.fullName || "Engr. ITET Member",
          batch: rProfile?.batch || "Verified Member",
          timestamp: new Date(r.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          }),
          content: r.content,
          likes: r.likesCount,
        };
      });

      return {
        id: p.id,
        title: p.title,
        author: authorName,
        batch: batch,
        memberType: memberType,
        zone: zone,
        timestamp: new Date(p.createdAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        category: p.category,
        tags: p.tags ? p.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
        content: p.content,
        likes: p.likesCount,
        userLiked: false,
        repliesCount: p.replies.length,
        flagged: p.flagged,
        comments: comments,
      };
    });
  };

  const [posts, setPosts] = useState<Post[]>(() => formatPosts(dbPosts));

  // Action handling migrated to Phase 3

  const categories = [
    "All Topics",
    "Spinning & Yarn",
    "Dyeing & Finishing",
    "Garments & Merchandising",
    "Career & Accreditation",
    "Welfare & Benevolent Fund",
  ];

  const handleLikePost = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const isLiked = p.userLiked;
          return {
            ...p,
            userLiked: !isLiked,
            likes: isLiked ? p.likes - 1 : p.likes + 1,
          };
        }
        return p;
      })
    );
  };

  const handleFlagPost = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return { ...p, flagged: true };
        }
        return p;
      })
    );
    alert(
      "This query has been flagged for secretariat review. Thank you for maintaining forum etiquette."
    );
  };

  const handleAddComment = (postId: string) => {
    if (!replyText.trim()) return;
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const newComment: Comment = {
            id: `c-${Date.now()}`,
            author: "Engr. Tanvir Ahmed",
            batch: "34th Batch (BUTEX)",
            timestamp: "Just now",
            content: replyText.trim(),
            likes: 0,
          };
          return {
            ...p,
            repliesCount: p.repliesCount + 1,
            comments: [...p.comments, newComment],
          };
        }
        return p;
      })
    );
    setReplyText("");
    setActiveReplyPostId(null);
  };


  const filteredPosts = posts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory =
      selectedCategory === "All Topics" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-gray-900 font-poppins selection:bg-primary selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#ebdccf] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/member-dashboard"
            className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Member Dashboard</span>
          </Link>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span>ITET Community Forum</span>
          </div>
        </div>

        <button
          onClick={() => setIsNewPostModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary hover:bg-[#d04e0a] text-white text-xs font-semibold shadow-xs transition-colors"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Ask Question / Post Query</span>
        </button>
      </header>

      {/* Main Forum Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Hero Header */}
        <div className="bg-white rounded-2xl border border-[#ebdccf] p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-orange-50 text-[#e8590c] border border-orange-200 mb-2">
                <Sparkles className="w-3 h-3 text-[#e8590c]" />
                <span>Verified Peer Community</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold font-manuale text-gray-900">
                Textile Engineering &amp; Community Q&amp;A
              </h1>
              <p className="text-xs text-gray-500 mt-1 max-w-xl">
                Collaborative technical discussions, industrial troubleshooting, and career guidance for ITET members across Bangladesh.
              </p>
            </div>
            <div className="text-right self-start sm:self-center">
              <span className="text-2xl font-bold font-manuale text-primary">
                {posts.length}
              </span>
              <p className="text-[11px] text-gray-500 font-medium">
                Active Discussions
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-5 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions, technical terms, chemical recipes, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-primary bg-gray-50/50"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#1a2b49] text-white font-semibold shadow-xs"
                    : "bg-[#faf5ef] text-gray-700 hover:bg-[#f0e3d5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Post Feed */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-[#ebdccf] p-5 sm:p-6 shadow-xs hover:border-[#d9c4b2] transition-colors space-y-4"
            >
              {/* Header / Author */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .slice(1, 3)
                      .join("")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-xs sm:text-sm text-gray-900">
                        {post.author}
                      </h3>
                      <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {post.batch}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">
                        • {post.timestamp}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500">{post.zone}</p>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-[#1a2b49] bg-slate-100 px-2.5 py-1 rounded-md shrink-0">
                  {post.category}
                </span>
              </div>

              {/* Title & Content */}
              <div>
                <h2 className="text-base sm:text-lg font-bold font-manuale text-gray-900 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed whitespace-pre-line">
                  {post.content}
                </p>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono bg-[#faf5ef] text-gray-600 px-2 py-0.5 rounded border border-[#ebdccf]/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Interaction Bar */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-4">
                  {/* Like Button */}
                  <button
                    onClick={() => handleLikePost(post.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                      post.userLiked
                        ? "bg-orange-50 border-orange-200 text-primary font-semibold"
                        : "border-gray-200 hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{post.likes} Helpful</span>
                  </button>

                  {/* Reply Button */}
                  <button
                    onClick={() =>
                      setActiveReplyPostId(
                        activeReplyPostId === post.id ? null : post.id
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments.length} Replies</span>
                  </button>

                  {/* Share */}
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      alert("Forum discussion link copied to clipboard!");
                    }}
                    className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-gray-500 hover:text-gray-800"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Flag to Admin Button */}
                <button
                  onClick={() => handleFlagPost(post.id)}
                  disabled={post.flagged}
                  className={`inline-flex items-center gap-1 text-[11px] font-medium transition-colors ${
                    post.flagged
                      ? "text-red-400 cursor-not-allowed"
                      : "text-gray-400 hover:text-red-600"
                  }`}
                  title="Flag post to ITET Admin for moderation"
                >
                  <Flag className="w-3 h-3" />
                  <span>{post.flagged ? "Flagged" : "Flag"}</span>
                </button>
              </div>

              {/* Threaded Replies View */}
              {(activeReplyPostId === post.id || post.comments.length > 0) && (
                <div className="pt-4 border-t border-gray-100 space-y-3 bg-[#faf8f5]/60 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 sm:p-5 rounded-b-2xl">
                  {post.comments.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Peer Responses ({post.comments.length})
                      </h4>
                      {post.comments.map((comment) => (
                        <div
                          key={comment.id}
                          className="bg-white p-3.5 rounded-xl border border-[#ebdccf]/80 text-xs space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-gray-900">
                                {comment.author}
                              </span>
                              <span className="text-[10px] text-gray-500">
                                ({comment.batch})
                              </span>
                            </div>
                            <span className="text-[10px] text-gray-400">
                              {comment.timestamp}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {comment.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reply Composer */}
                  <div className="pt-2 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Write your professional technical response..."
                      value={activeReplyPostId === post.id ? replyText : ""}
                      onFocus={() => setActiveReplyPostId(post.id)}
                      onChange={(e) => setReplyText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleAddComment(post.id);
                        }
                      }}
                      className="flex-1 px-3.5 py-2 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-primary"
                    />
                    <button
                      onClick={() => handleAddComment(post.id)}
                      className="p-2 bg-primary hover:bg-[#d04e0a] text-white rounded-lg shadow-xs transition-colors shrink-0"
                      title="Post Reply"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </main>

      {/* CREATE POST MODAL */}
      {isNewPostModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl border border-[#ebdccf] w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 my-8">
            <div className="p-5 border-b border-[#ebdccf] flex items-center justify-between bg-[#faf5ef]">
              <div>
                <h3 className="font-bold text-base text-gray-900 font-manuale">
                  Ask a Community Question
                </h3>
                <p className="text-xs text-gray-500">
                  Your query will be visible to 8,500+ verified ITET engineers
                </p>
              </div>
              <button
                onClick={() => setIsNewPostModalOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              action={async (formData) => {
                const res = await handleCreateQaPostAction(formData);
                if (res?.success) {
                  setIsNewPostModalOpen(false);
                  setNewTitle("");
                  setNewContent("");
                  setNewTags("");
                } else if (res?.error) {
                  alert(res.error);
                }
              }}
              className="p-6 space-y-4 text-xs"
            >
              <input type="hidden" name="intent" value="create-post" />
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Topic / Category
                </label>
                <select
                  name="category"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-primary text-xs"
                >
                  <option value="Spinning & Yarn">Spinning & Yarn</option>
                  <option value="Dyeing & Finishing">Dyeing & Finishing</option>
                  <option value="Garments & Merchandising">
                    Garments & Merchandising
                  </option>
                  <option value="Career & Accreditation">
                    Career & Accreditation
                  </option>
                  <option value="Welfare & Benevolent Fund">
                    Welfare & Benevolent Fund
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Question Title <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Recommendations for reducing dye bath temperature..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Detailed Description &amp; Process Parameters{" "}
                  <span className="text-primary">*</span>
                </label>
                <textarea
                  rows={5}
                  name="content"
                  placeholder="Describe your machinery, liquor ratio, chemical specifications, or background..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-xs resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  placeholder="e.g. Lyocell, Washing, Enzymes"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-xs"
                />
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsNewPostModalOpen(false)}
                  className="px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-lg text-gray-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary hover:bg-[#d04e0a] text-white font-semibold rounded-lg shadow-xs"
                >
                  Publish Query
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
