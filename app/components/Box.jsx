


const Box = () => {
    return ( 
        <article className="">
            <div className="flex justify-between">
                <p className="text-white pl-5">Categories</p>
                <p className="text-grey pr-7">Uncheck all</p>
            </div>
            <div className="rounded-3xl text-white w-56 p-5 m-5 bg-darkGrey leading-10">
                <p className="border-b-2 flex justify-between">Action <input type="checkbox" name="action" id="action" /></p>
                <p className="border-b-2 flex justify-between">Adventure <input type="checkbox" name="adventure" id="adventure" /></p>
                <p className="border-b-2 flex justify-between">Animated <input type="checkbox" name="animated" id="animated" /></p>
                <p className="border-b-2 flex justify-between">Comedy <input type="checkbox" name="comedy" id="comedy" /></p>
                <p className="border-b-2 flex justify-between">Crime <input type="checkbox" name="crime" id="crime" /></p>
                <p className="border-b-2 flex justify-between">Fantasy <input type="checkbox" name="fantasy" id="fantasy" /></p>
                <p className="text-center text-grey">See more</p>
            </div>
            <div className="flex justify-between">
                <p className="text-white pl-5">Services</p>
                <p className="text-grey pr-7">Uncheck all</p>
            </div>
            <div className="rounded-3xl text-white w-56 p-5 m-5 bg-darkGrey leading-10">
                <p className="border-b-2 flex justify-between">Neflix <input type="checkbox" name="netflix" id="netflix" /></p>
                <p className="border-b-2 flex justify-between">Prime video <input type="checkbox" name="prime" id="prime" /></p>
                <p className="border-b-2 flex justify-between">Disney + <input type="checkbox" name="disney" id="disney" /></p>
                <p className="border-b-2 flex justify-between">HBO max <input type="checkbox" name="hbo" id="hbo" /></p>
                <p className="border-b-2 flex justify-between">Hulu <input type="checkbox" name="hulu" id="hulu" /></p>
                <p className="border-b-2 flex justify-between">Starz <input type="checkbox" name="starz" id="starz" /></p>
                <p className="text-center text-grey">See more</p>
            </div>
        </article>
     );
}
 
export default Box;