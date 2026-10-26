import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GalleryCard } from "./GalleryCard";

const CDN = "https://res.cloudinary.com/dov6k7xdk/image/upload";

const photos = [
  {
    image: `${CDN}/v1787392520/fchpbtayxgoihujbolap.jpg`,
    title: "টেক্সটাইল খাতে উদ্ভাবন ও গবেষণার নতুন দিগন্ত: ITET এবং TIE-এর মধ্যে ঐতিহাসিক MoU স্বাক্ষর!",
    category: "Industry & Policy",
    label: "ITET TIE- MoU",
    span: "lg:col-span-3",
  },
  {
    image: `${CDN}/v1786968419/dpwfafgh6ox4kau3zo9y.jpg`,
    title: "ITET Curated Moment",
    category: "Highlights",
    span: "lg:col-span-6",
  },
  {
    image: `${CDN}/v1786968268/kzyv31tazjvtpmnhp2ci.jpg`,
    title:
      "Textile Today constraint highlights the newly elected 15th Council Committee of ITET in their July 2026 edition (Page 25). We extend our sincere gratitude to Textile Today for featuring our leadership team. The 15th Council Committee remains committed to driving professional excellence, and sustainable growth across the textile engineering community.",
    category: "Council & Leadership",
    span: "lg:col-span-3",
  },
  {
    image: `${CDN}/v1786623204/omwhwr5woifwj17nl3se.jpg`,
    title:
      "02 August 2026, IEB Central Leaders and the newly elected ITET Executive Committee met in an exchange of views meeting, at the IEB Headquarters, chaired by IEB President and RAJUK Chairman Engr. Mohammad Riazul Islam (Riju).",
    category: "Council & Leadership",
    label: "02 August 2026",
    span: "lg:col-span-4",
  },
  {
    image: `${CDN}/v1786622893/my8ajrl1bi360rubdto2.jpg`,
    title:
      "On 29 July 2026, ITET officially submitted a comprehensive and timely policy recommendation paper titled 'Building a Productive, and Innovative Textile Economy for Bangladesh' to the office of Honorable Prime Minister Tarique Rahman.",
    category: "Industry & Policy",
    label: "On 29 July",
    span: "lg:col-span-4",
  },
  {
    image: `${CDN}/v1786622571/rznb5zh4zfcwdym1vpc4.jpg`,
    title:
      "On 26th June, 2026; Historic Landslide Victory for ITET: Enayet–Sumayel–Nixon (GG) Panel Achieves a Historic Clean Sweep!",
    category: "Council & Leadership",
    span: "lg:col-span-4",
  },
  {
    image: `${CDN}/v1786622438/gzldzflekiej6bkxqid7.jpg`,
    title:
      "On 14th July 2026, Engr. Abdus Sobhan, CIP, the honorable Managing Director of Auko-Tex Group, extended a warm reception, heartiest greetings, and congratulations through a grand event to the newly elected members following their historic victory in the 15th Central Executive Council election of ITET.",
    category: "Council & Leadership",
    span: "lg:col-span-6",
  },
  {
    image: `${CDN}/v1786622156/i7vsh7brluqn4q2bztss.jpg`,
    title:
      "On 18th July 2026, Leadership transition marks a new chapter for ITET. The Institution of Textile Engineers & Technologists (ITET), officially held its Handover & Takeover Ceremony, marking the transition to the 15th Council.",
    category: "Council & Leadership",
    label: "On 18th July",
    span: "lg:col-span-6",
  },
  {
    image: `${CDN}/v1786619036/jggfrdrnp18ujbzim1wk.jpg`,
    title:
      "On July 27, 2026, a newly elected delegation from the 15th Central Executive Council of The Institution of Textile Engineers and Technologists (ITET), led by its Honorable President Engr. Md. Enayet Hossain, paid a courtesy visit to Khandaker Abdul Muktadir, Honorable Minister of Textiles and Jute, at his residence.",
    category: "Council & Leadership",
    label: "On July 27",
    span: "lg:col-span-4",
  },
  {
    image: `${CDN}/v1786615736/ra4bglla1m7y0iwx6q4d.jpg`,
    title:
      "On 1st August 2026, The 15th Council of ITET Bangladesh organized a discussion meeting and prayer program to remember the martyrs of the July Movement and pray for the forgiveness of their souls.",
    category: "Council & Leadership",
    span: "lg:col-span-4",
  },
  {
    image: `${CDN}/v1786615640/ktvkf8w4w6zkf1odcknj.jpg`,
    title:
      "On 1st August 2026, The 15th Council of ITET Bangladesh organized a discussion meeting and prayer program to remember the martyrs of the July Movement and pray for the forgiveness of their souls.",
    category: "Council & Leadership",
    span: "lg:col-span-4",
  },
];

export function MediaGallerySection() {
  return (
    <section className="relative py-10 lg:py-16 bg-[#fafaf8] border-t border-b border-neutral-200/60 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/[0.04] blur-3xl rounded-full pointer-events-none" />

      <div className="mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-manuale text-neutral-900 tracking-tight">
              Moments &amp; <span className="text-primary font-normal">Media Gallery</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 max-w-xl">
              Glimpses into ITET leadership councils, engineering summits, industrial conventions, and fellowship celebrations.
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-sm sm:text-base text-gray-700 hover:text-primary hover:underline font-medium inline-flex items-center gap-1.5 self-start sm:self-end transition-colors group cursor-pointer shrink-0"
          >
            <span>Explore All Archives</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 12-col asymmetric grid: 3/6/3, 4/4/4, 6/6, 4/4/4 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-2.5 sm:gap-3.5 md:gap-4">
          {photos.map((photo) => (
            <GalleryCard key={photo.image} {...photo} />
          ))}
        </div>

        {/* See More */}
        <div className="mt-10 sm:mt-12 flex justify-center items-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 rounded-md bg-secondary hover:bg-primary text-white text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
          >
            <span>See More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
