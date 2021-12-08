import About from "../components/About"
import Contact from "../components/Contact"
import Masthead from "../components/Masthead"
import Container from "../layout/Container"
import Register from "./Register"
import Card from "../components/Card"
import PerfilTec from "./PerfilTec"

const Principal = () => {
    return (
        <Container>
            <Masthead />
            <About />
            <Contact />
            {/* <Register/> */}
            {/* <Card/>
            <PerfilTec/> */}
        </Container>
    )
}

export default Principal
