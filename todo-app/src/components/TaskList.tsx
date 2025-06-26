//versi  sendiri


// "use client";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Trash, SquarePen } from "lucide-react";
// import { Input } from "./ui/input";
// import { useRef, useState } from "react";

// interface ITaskListProps {
//     id: number;
//     task: string;
//     isDone: boolean;
//     onBtDelete: (id: number) => void;
//     onBtIsdone: (id: number) => void;
//     editTask: (id: number, task: string) => void;
//     clearDone?: (id: number) => void;
// }

// function TaskList(props: ITaskListProps) {

//     const [showEditForm, setShowEditForm] = useState(false);
//     const editRef = useRef<HTMLInputElement>(null);

//     return (
//         <div key={props.id} className="flex flex-col gap-2 py-2">
//             {/* Tampilan Normal */}
//             <div className={`${showEditForm ? "hidden" : "flex"} items-center gap-6`}>
//                 <Checkbox
//                     onClick={() => props.onBtIsdone(props.id)}
//                     checked={props.isDone}
//                     className="rounded-full w-6 h-6 border-gray-400"
//                 />

//                 <p className={`${props.isDone ? "line-through text-gray-400" : ""}`}>
//                     {props.task}
//                 </p>

//                 <Button
//                     type="button"
//                     className="p-0 w-8 h-8 rounded-full cursor-pointer"
//                     onClick={() => props.onBtDelete(props.id)}
//                 >
//                     <Trash size={24} />
//                 </Button>

//                 <Button
//                     type="button"
//                     className="p-0 w-8 h-8 rounded-full cursor-pointer"
//                     onClick={() => setShowEditForm(true)}
//                 >
//                     <SquarePen size={24} />
//                 </Button>
//             </div>

//             {/* Edit */}
//             <div className={`${showEditForm ? "flex" : "hidden"} items-center gap-6`}>
//                 <Input
//                     className="w-[26rem]"
//                     ref={editRef}
//                     defaultValue={props.task}
//                     placeholder="masukan task edit"
//                 />

//                 <Button className="cursor-pointer"
//                     onClick={() => setShowEditForm(false)}>Cancel</Button>

//                 <Button className="cursor-pointer"
//                     onClick={() => {
//                         if (editRef.current && editRef.current.value) {
//                             const newValue = editRef.current.value;
//                             editRef.current.value = "";
//                             props.editTask(props.id, newValue);
//                             setShowEditForm(false);
//                         } else {
//                             alert("gak boleh kosong");
//                         }
//                     }
//                     }
//                 >
//                     Yes
//                 </Button>
//             </div>

//         </div>
//     );
// }

// export default TaskList;




//versi kak abdi




import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Trash } from "lucide-react";

interface ITaskListProps {
  data: any;
  onBtDelete: (id: number) => void;
  onBtIsDone: (id: number) => void;
  onBtSelect: (data: any) => void;
}

function TaskList({
  data,
  onBtDelete,
  onBtIsDone,
  onBtSelect,
}: ITaskListProps) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-6">
        <Checkbox
          checked={data.isDone}
          className="rounded-full w-6 h-6 border-gray-400"
          onClick={() => onBtIsDone(data.id)}
        />
        <p className={data.isDone ? "line-through" : ""}>{data.task}</p>
      </div>
      <div>
        <Button
          type="button"
          className="p-0 w-8 h-8 rounded-full"
          onClick={() => onBtDelete(data.id)}
        >
          <Trash size={24} />
        </Button>
        <Button
          type="button"
          className="p-0 w-8 h-8 rounded-full"
          onClick={() => onBtSelect(data)}
        >
          <Edit size={24} />
        </Button>
      </div>
    </div>
  );
}
export default TaskList;
