

const AddUser = ()=>{
    return(
        // <div>
        //     <input type="button" value="Add Users"/>
        // </div>

        <form>
            <div>
                <label>Name</label>
                <input type="text" id="name" name="name"></input>
            </div>
            <div>
                <label>E-mail</label>
                <input type="email" id="email" name="eail"></input>
            </div>
            <div>
                <label>Gender</label>
                <input type="text" id="gender" name="gender"></input>
            </div>
            <div>
                <input type="button" value="Cancel"></input>
            </div>
            <div>
                <input type="button" value="Save"></input>
            </div>
        </form>
    )
}

export default AddUser