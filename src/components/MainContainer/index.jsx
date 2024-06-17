import '../MainContainer/MainContainer.modules.css';

export default function MainContainer ({ children }){
    return(
        <main className="main-container">
            { children }
        </main>
    );
}
