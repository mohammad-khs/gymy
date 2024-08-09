const TopProgressBar = ({goals, fitness , healthAndCycle , profile}) => {
    return ( <>
    <div className="flex w-8/12 justify-between items-center mb-28 h-px bg-black" >
        <div className={`circles ${goals ? "p-2" : "p-6"} rounded-full ${goals ? "bg-mehranaGray" : "bg-mehranaDarkGray" } border-mehranaOrange border-2 text-2xl`}>{goals}</div>
        <div className={`circles ${fitness ? "p-2" : "p-6"} rounded-full ${fitness ? "bg-mehranaGray" : "bg-mehranaDarkGray" } border-mehranaOrange border-2 text-2xl`}>{fitness}</div>
        <div className={`circles ${profile ? "p-2" : "p-6"} rounded-full ${profile ? "bg-mehranaGray" : "bg-mehranaDarkGray" } border-mehranaOrange border-2 text-2xl`}>{profile}</div>
        <div className={`circles ${healthAndCycle ? "p-2" : "p-6"} rounded-full ${healthAndCycle ? "bg-mehranaGray" : "bg-mehranaDarkGray" } border-mehranaOrange border-2 text-2xl`}>{healthAndCycle}</div>
    </div>
    </> );
}
 
export default TopProgressBar;