"use client";
import { useRef, useState } from "react";

function SignupPage() {
    const inUsername = useRef<HTMLInputElement>(null);

    const [print, setPrint] = useState(""); // [value, function(newValue){}]
    //menyimpan kumpulan data didalam useSate

    const [data, setData] = useState<string[]>([]);


    function onBtSubmit() {
        if (inUsername.current) {
            console.log(inUsername.current.value);
            // setPrint(inUsername.current.value);


            //1.periksa apakah username dari inusername sudah ada dalam state data
            const filter = data.filter(
                (value: string) => value === inUsername.current?.value
            );
            if (!filter.length) {
                setData([...data, inUsername.current.value]);
                inUsername.current.value = "";
            } else {
                alert("data sudah ada")
            }
            //2. jika belum ada maka tambahkan
            //3.jika sudah ada berikan peringatan
        }

    }

    function displayData() {
        return data.map((value: string, index: number) => {
            return <li key={`${value}-${index}`}> {value}
            </li>
        })
    };




    return (
        <div>
            <div className="w-72 py-6 px-4 m-auto mt-20 rounded-3xl shadow-2xl">
                <h1 className="text-2xl font-bold">Signup</h1>
                {/* <span >{print}</span> */}
                <div className="my-4">
                    <label>Username</label>
                    <br />
                    <input type="text" placeholder="Masukan username"
                        className="w-full border border-black 
                        p-2 mt-2 rounded-2xl shadow-2xl"
                        ref={inUsername} //untuk menerima
                    />
                </div>
                <div className="text-right">
                    <button type="button" className="border border-black rounded-3xl py-1 px-2
                     text-white bg-black text-sm shadow-2xl"
                        onClick={onBtSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div>

                <div>
                </div>
                <ul>
                    {displayData()}
                </ul>
            </div>
        </div>
    );
}

export default SignupPage;