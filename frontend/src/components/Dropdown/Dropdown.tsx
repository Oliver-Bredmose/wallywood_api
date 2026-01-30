export function Dropdown() {


    return (

        <select onChange={{Event} => console.log();}>
            <option value="asc">Pris - Stigende</option>
            <option value="desc">Pris - Faldende</option>
            <option value="title"> Title </option>

        </select>

    )
}