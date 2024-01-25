function AboutMe() {

    const state = "Vermont";
    const city = "Manchester";

    let styles = {
        ul: {
            textAlign: 'left',
            color: 'red',
        },
        p: {
            fontSize: '20pt'
        }
    }

    return(
        <div>
        <p style={styles.p}>{city}, {state}</p>
        <ul style={styles.ul}>
            <li> Grocery Store</li>
            <li> Work</li>
            <li> Home</li>
        </ul>
        </div>
     )
}

export default AboutMe;