"use client";
import { useRef, useState } from "react";

function SignupPage() {
  const inUsername = useRef<HTMLInputElement>(null);

  // const [print, setPrint] = useState(""); // [value, function(newValue){}]
  
  // Menyimpan kumpulan data didalam useSate
  const [data, setData] = useState<string[]>([]);

  function onBtSubmit() {
    if (inUsername.current) {
      console.log(inUsername.current.value);
      // setPrint(inUsername.current.value);
      // data.push(inUsername.current.value);

      // 1. Periksa apakah username dari inUsername sudah ada didalam state data
      const filter = data.filter(
        (value: string) => value === inUsername.current?.value
      );
      if (!filter.length) {
        // 2. Jika belum ada maka tambahkan
        setData([...data, inUsername.current.value]);
        inUsername.current.value = "";
      } else {
        // 3. Jikas sudah ada berikan peringatan alert
        alert("Data sudah ada");
      }
    }
  }

  function displayData() {
    return data.map((value: string, index: number) => {
      return (
        <li
          key={`${value}-${index}`}
          className="w-full shadow p-3 mt-2 rounded-3xl"
        >
          {value}
        </li>
      );
    });
  }

  return (
    <div>
      <div className="w-80 py-6 px-4 m-auto mt-20 rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold">Signup</h1>
        {/* <span>{print}</span> */}
        <div className="my-4">
          <label>Username</label>
          <br />
          <input
            type="text"
            placeholder="Masukkan username"
            className="w-full border p-2 mt-2 rounded-3xl shadow"
            ref={inUsername}
          />
        </div>
        <div className="text-right">
          <button
            type="button"
            className="bg-black text-white text-sm py-1.5 px-2 rounded-3xl shadow-lg"
            onClick={onBtSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <ul id="print-data-username" className="w-80 m-auto mt-6">
        {displayData()}
      </ul>
    </div>
  );
}

export default SignupPage;