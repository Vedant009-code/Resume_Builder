export default function Home({name}){
    return(
        <div>
            <button className="h-[44px] px-[24px]
         bg-[#4F46E5] hover:bg-[#4338CA]
         text-white text-[14px] font-semibold
         rounded-[11px]
         transition">
               {name}
            </button>
        </div>
    )
}