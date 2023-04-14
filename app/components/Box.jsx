


const Box = () => {
    return ( 
        <article className="">
        <h2>Categories</h2>
            <div className="rounded-3xl text-white w-56 p-5 m-5 bg-darkGrey leading-10">
                <p className="border-b-2">Action <input type="checkbox" name="action" id="action" /></p>
                <p className="border-b-2">Adventure <input type="checkbox" name="adventure" id="adventure" /></p>
                <p className="border-b-2">Animated <input type="checkbox" name="animated" id="animated" /></p>
                <p className="border-b-2">Comedy <input type="checkbox" name="comedy" id="comedy" /></p>
                <p className="border-b-2">Crime <input type="checkbox" name="crime" id="crime" /></p>
                <p className="border-b-2">Fantasy <input type="checkbox" name="fantasy" id="fantasy" /></p>
                <p className="text-center">See more</p>
            </div>
            <h2>Services</h2>
            <div className="rounded-3xl text-white w-56 p-5 m-5 bg-darkGrey leading-10">
                <p className="border-b-2">Neflix <input type="checkbox" name="netflix" id="netflix" /></p>
                <p className="border-b-2">Prime video <input type="checkbox" name="prime" id="prime" /></p>
                <p className="border-b-2">Disney + <input type="checkbox" name="disney" id="disney" /></p>
                <p className="border-b-2">HBO max <input type="checkbox" name="hbo" id="hbo" /></p>
                <p className="border-b-2">Hulu <input type="checkbox" name="hulu" id="hulu" /></p>
                <p className="border-b-2">Starz <input type="checkbox" name="starz" id="starz" /></p>
                <p className="text-center">See more</p>
            </div>
        </article>
     );
}
 
export default Box;