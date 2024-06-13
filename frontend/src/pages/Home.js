import CardComp from "../components/cardComp";

export default function Home() {
    return (
        <div className="m-3 grid grid-cols-3 gap-3">
            <CardComp/>
            <CardComp/>
            <CardComp/>

        </div>
    );
    }