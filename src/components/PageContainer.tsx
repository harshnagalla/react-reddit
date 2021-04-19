import Header from "./header/Header"
import threadLogo from "../assets/images/threadLogo.png";
import ThreadHeader from "./threadHeader/ThreadHeader"
import Content from "./content/Content"
import "./PageContainer.scss";

const PageContainer = () => {
    return (
        <div>
            <Header />
            <img src={threadLogo} alt="" />
            <ThreadHeader />

            <Content />
        </div>
    )
}



export default PageContainer;