interface Ibutton {
    title: string;
}


function Button(props: Ibutton) {

    return (
        <button id="button" className="bg-blue-200 md:bg-amber-200 lg:bg-red-500 p-[10px] rounded-lg">
            {props.title}</button>
    );

}
export default Button;
