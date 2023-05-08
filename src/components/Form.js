const Form = () => {
    return (
        <form>
            <label for="test1">
                Test1
                <input name="test1">
                </input>
                </label>
            <label for="textarea">
                Insert text:
                <input type="text" name="textarea"></input>
            </label>
        </form>
    );
}

export default Form;