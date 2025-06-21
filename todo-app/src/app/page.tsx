export default function Home() {

  return (
    <div>
        <div className="bg-[url(/bg-desktop-light.jpg)] bg-no-repeat bg-cover bg-center w-screen h-[300px]">
          <div id="container" className="mx-auto max-w-[540px] space-y-[40px] px-[24px] pt-[30px]">
            <div id="title" className="flex justify-between items-center">
              <h1 id="logo" className="text-[white] font-[600] font-\[Josefin Sans\] text-[40px] tracking-[15px]">TODO</h1>
              <img src="/icon-moon.svg" alt="moon" className="w-[25px] h-[26px]" />
            </div>
            <div id="input" className="mx-auto flex justify-center">    {/** ini input text */}
              <input type="text" placeholder="Create a new todo... " className="bg-white w-[540px] h-[64px] rounded-[5px] placeholder-gray-500 placeholder:text-normal placeholder:pl-[72px] placeholder:[font-family:'Josefin_Sans'] placeholder:tracking-[-0.25px] placeholder:text-[18px]" />
            </div>
            <div className="rounded-[10px] bg-white">
              <ul>
                <li className="space-x-[24px] border-b border-[#E3E4F1] p-[20px]">
                  <input type="checkbox" className="w-[24px] h-[24px]" />
                  <label className="text-[18px] font-normal text-[#D1D2DA] tracking-[-0.25px] line-through">Complete online JavaScript course</label>
                </li>
                <li className="space-x-[24px] border-b border-[#E3E4F1] p-[24px]">
                  <input type="checkbox" className="w-[24px] h-[24px]" />
                  <label className="text-[18px] font-normal text-[#494C6B] tracking-[-0.25px]">Jog around the park 3x</label>
                </li>
                <li className="space-x-[24px] border-b border-[#E3E4F1] p-[24px]">
                  <input type="checkbox" className="w-[24px] h-[24px]" />
                  <label className="text-[18px] font-normal text-[#494C6B] tracking-[-0.25px]">10 minutes meditation</label>
                </li>
                <li className="space-x-[24px] border-b border-[#E3E4F1] p-[24px]">
                  <input type="checkbox" className="w-[24px] h-[24px]" />
                  <label className="text-[18px] font-normal text-[#494C6B] tracking-[-0.25px]">Read for 1 hour</label>
                </li>
                <li className="space-x-[24px] border-b border-[#E3E4F1] p-[24px]">
                  <input type="checkbox" className="w-[24px] h-[24px]" />
                  <label className="text-[18px] font-normal text-[#494C6B] tracking-[-0.25px]">Pick up groceries</label>
                </li>
                <li className="space-x-[24px] border-b border-[#E3E4F1] p-[24px]">
                  <input type="checkbox" className="w-[24px] h-[24px]" />
                  <label className="text-[18px] font-normal text-[#494C6B] tracking-[-0.25px]">Complete Todo App on Frontend Mentor</label>
                </li>
              </ul>
              <div id="last" className="space-x-[24px] py-[15px] flex justify-between">
                <div className="pl-[24px]">
                  <span className=" text-[#C4C5D5] text-[14px] tracking-[-0.19px]">5 items left</span>
                </div>
                <div className="space-x-2 [@media(max-width:481px)]:hidden"> {/**desktop */}
                  <span className="text-[#3A7CFD] font-bold text-[14px] tracking-[-0.19px]">All</span>
                  <span className="text-[#9495A5] font-bold text-[14px] tracking-[-0.19px]">Active</span>
                  <span className="text-[#9495A5] font-bold text-[14px] tracking-[-0.19px]">Completed</span>
                </div>
                <div className="pr-[24px]">
                  <span className="text-[#9495A5] font-normal text-[14px] tracking-[-0.19px]">Clear Completed</span>
                </div>
              </div>
            </div>
            <div className="[@media(min-width:481px)]:hidden flex justify-center space-x-[19px] py-[24px] bg-white rounded-[10px]">{/**mobile */}
              <span className="text-[#3A7CFD] font-bold text-[14px] tracking-[-0.19px]">All</span>
              <span className="text-[#9495A5] font-bold text-[14px] tracking-[-0.19px]">Active</span>
              <span className="text-[#9495A5] font-bold text-[14px] tracking-[-0.19px]">Completed</span>
            </div>
            <div>
              <footer className="flex justify-center mt-[52px] text-[#9495A5] font-normal text-[14px] tracking-[-0.19px]">Drag and drop to reorder list</footer>
            </div>
          </div>
        </div>
    </div>
  );
}
