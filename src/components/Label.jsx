function Label({label}){
    return (
    <>
        <div
        className="
        absolute left-full ml-2 top-1/2 -translate-y-1/2
        bg-customBlue2 rounded-xl px-5 py-1
        opacity-0 scale-90
        group-hover:opacity-100 group-hover:scale-100
        transition-all duration-500 ease-in-out
        pointer-events-none
        "
        >
            <p className="font-jetbrains text-[6px] sm:text-[8px] lg:text-[13px]">{label}</p>
        </div>
    </>
    );
}
export default Label;