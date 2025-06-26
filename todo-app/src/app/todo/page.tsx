
//versi sendiri


// "use client";


// import { Button } from "@/components/ui/button";
// import { CardContent } from "@/components/ui/card";
// import { Edit, Moon, Variable, Vault } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { HtmlHTMLAttributes, useRef, useState } from "react";
// import TaskList from "@/components/TaskList";

// interface ITask {
//     id: number;
//     task: string;
//     isDone: boolean;


// }



// function TodoPage() {

//     //state for store data task
//     const [taskList, setTaskList] = useState<ITask[]>([]);
//     const inTaskRef = useRef<HTMLInputElement>(null);


//     function onButtonAdd() {
//         // -memastikan input sudah diisi
//         if (inTaskRef.current && inTaskRef.current.value) {
//             // - duplikasi data task list ke varaiabel lain
//             const temp: ITask[] = [...taskList];
//             // tambah data baru ke variabel salinan
//             temp.push({
//                 id: temp.length + 1,
//                 task: inTaskRef.current.value,
//                 isDone: false,
//             });

//             //perbahasui data tasklist dengan data dari temp

//             setTaskList(temp);
//             //reset form input
//             inTaskRef.current.value = "";
//         } else {
//             alert("form task harus diisi");
//         }

//     }

//     function onBtDelete(id: number) {
//         // - duplicate data taskList ke variable lain
//         const temp: ITask[] = [...taskList];
//         // - mencari index data berdasarkan id
//         const dataIdx = temp.findIndex((value: ITask) => value.id === id);
//         // - menghapus data berdasarkaninde
//         temp.splice(dataIdx, 1);
//         // - perbaharui data task lis
//         setTaskList(temp);
//     }

//     function onBtIsdone(id: number) {
//         // - duplicate data taskList ke variable lain
//         const temp: ITask[] = [...taskList];
//         // - mencari index data berdasarkan id
//         const dataIdx = temp.findIndex((value: ITask) => value.id === id);
//         // - meperbbahasui nilai isdone
//         temp[dataIdx].isDone = !temp[dataIdx].isDone;
//         // - perbaharui data task lis
//         setTaskList(temp);

//     }

//     function EditTask(id: number, task: string) {

//         const temp: ITask[] = [...taskList];

//         const index = temp.findIndex((value: ITask) => value.id === id);

//         temp[index] = { ...temp[index], task: task };

//         setTaskList(temp);
//     }

//     function clearDone() {
//         const done = taskList.filter((value: ITask) => value.isDone === false);
//         setTaskList(done)

//     }



//     function printTaskList() {
//         return taskList.map((value: ITask) => {

//             return (
//                 <li key={value.id}>
//                     <TaskList
//                         id={value.id}
//                         task={value.task}
//                         isDone={value.isDone}
//                         onBtDelete={onBtDelete}
//                         onBtIsdone={onBtIsdone}
//                         editTask={EditTask}
//                     />
//                 </li>
//             );
//         });
//     }






//     return (<div>
//         <div id="header" className="h-48 pt-12 relative bg-gradient-to-b from-purple-500">
//             <div className="w-[40rem] flex justify-between items-center abosolute top-10 mx-auto">
//                 <h1 className="text-4xl font-bold text-white ">Todo</h1>
//                 <Button variant="ghost" className="cursor-pointer" size="icon">
//                     <Moon size={24} color="white" />
//                 </Button>
//             </div>
//         </div>
//         <div id="todo" className="w-[40rem] m-auto">
//             <Card id="form-input-task">
//                 <CardContent>
//                     <div className="relative">
//                         <Input type="text"
//                             placeholder="create a new todo..."
//                             ref={inTaskRef} //buat menerima inpuut dari text
//                         />
//                         <Button
//                             type="button"
//                             size="sm"
//                             className="absolute right-4 top-1/12 cursor-pointer"
//                             onClick={onButtonAdd}   //unurk menerima klik user

//                         >Add</Button>
//                     </div>
//                 </CardContent>

//             </Card>

//             <Card id="print-task">
//                 <CardContent>
//                     <ul>{printTaskList()}</ul>
//                 </CardContent>
//             </Card>
//         </div>
//             <div className="flex justify-center">
//                 <Button onClick={() => clearDone()}
//                     className="cursor-pointer">clear done task</Button>
//             </div>
//         </div>


//     );

// }

// export default TodoPage;


//versi kak abdi


"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Moon, Sun, Trash } from "lucide-react";
import { useContext, useRef, useState } from "react";
import TaskList from "@/components/TaskList";
import { ThemeContext } from "@/contexts/ThemeContex";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { setMode } from "@/lib/redux/features/themeSlice";

interface ITask {
  id: number;
  task: string;
  isDone: boolean;
}

function TodoPage() {
  // use context
  // const { modeContext, setModeContext } = useContext(ThemeContext);
  //use redux
  const dispatch = useAppDispatch();
  //mengambil nilai dari reducer
  const mode = useAppSelector((state) => state.themeReducer.mode);

  // tate for store data task
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const inTaskRef = useRef<HTMLInputElement>(null);
  const inTaskEditRef = useRef<HTMLInputElement>(null);
  // store selected data
  const [selectedData, setSelectedData] = useState<ITask | null>(null);

  function onBtAdd() {
    // - Memastikan input sudah diisi
    if (inTaskRef.current && inTaskRef.current.value) {
      // - Duplikasi data taskList ke variable lain
      const temp: ITask[] = [...taskList];
      // Tambah data baru ke variable salinan
      temp.push({
        id: temp.length + 1,
        task: inTaskRef.current.value,
        isDone: false,
      });
      // Perbarui data state taskList dengan data dari temp
      setTaskList(temp);
      // Reset form input
      inTaskRef.current.value = "";
    } else {
      alert("Form task harus diisi");
    }
  }

  function onBtDelete(id: number) {
    // - duplikat data taskList ke variable lain
    const temp: ITask[] = [...taskList];
    // - mencari index data berdasarkan id
    const dataIdx = temp.findIndex((value: ITask) => value.id === id);
    // - menghapus data berdasarkan index
    temp.splice(dataIdx, 1);
    // - perbarui data task list
    setTaskList(temp);
  }

  function onBtIsDone(id: number) {
    // - duplikat data taskList ke variable lain
    const temp: ITask[] = [...taskList];
    // - mencari index data berdasarkan id
    const dataIdx = temp.findIndex((value: ITask) => value.id === id);
    // - Memperbarui nilai property isDone
    temp[dataIdx].isDone = !temp[dataIdx].isDone;
    // - perbarui data task list
    setTaskList(temp);
  }

  function onBtSaveEdit() {
    // - duplikat data taskList ke variable lain
    const temp: ITask[] = [...taskList];
    // - mencari index data berdasarkan id
    const dataIdx = temp.findIndex(
      (value: ITask) => value.id === selectedData?.id
    );
    if (inTaskEditRef.current) {
      // - Memperbarui nilai property task
      temp[dataIdx].task = inTaskEditRef.current.value;
      // - perbarui data task list
      setTaskList(temp);
      setSelectedData(null); // reset selectedData
    }
  }

  function printTaskList() {
    return taskList.map((value: ITask) => {
      if (value.id === selectedData?.id) {
        return (
          <li key={value.id} className="flex items-center gap-1">
            <Input
              type="text"
              defaultValue={selectedData.task}
              ref={inTaskEditRef}
            />
            <Button
              type="button"
              size="sm"
              onClick={() => setSelectedData(null)}
            >
              Cancel
            </Button>
            <Button type="button" size="sm" onClick={onBtSaveEdit}>
              Save
            </Button>
          </li>
        );
      } else {
        return (
          <li key={value.id}>
            <TaskList
              data={value}
              onBtDelete={onBtDelete}
              onBtIsDone={onBtIsDone}
              onBtSelect={setSelectedData}
            />
          </li>
        );
      }
    });
  }

  return (
    <div>
      <div
        id="header"
        className="h-48 pt-12 relative bg-gradient-to-b from-purple-500"
      >
        <div className="w-[40rem] m-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-4xl font-bold text-white dark:text-red-600">
              Todo
            </h1>
          </Link>
          <p>Theme mode: {mode}</p>
          <Button
            variant="ghost"
            className="cursor-pointer"
            size="icon"
            onClick={() => {
              dispatch(setMode(mode === "light" ? "dark" : "light"));
              document.body.classList.toggle("dark");
            }}
          >
            {mode === "dark" ? (
              <Sun size={24} color="white" />
            ) : (
              <Moon size={24} color="white" />
            )}
          </Button>
        </div>
      </div>
      <div id="todo" className="w-[40rem] m-auto">
        <Card id="form-task">
          <CardContent>
            <div className="relative">
              <Input
                type="text"
                placeholder="Create a new todo..."
                className="py-6"
                ref={inTaskRef}
              />
              <Button
                type="button"
                size="sm"
                className="absolute right-4 top-1/6"
                onClick={onBtAdd}
              >
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card id="print-task">
          <CardContent>
            <ul>{printTaskList()}</ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TodoPage;
