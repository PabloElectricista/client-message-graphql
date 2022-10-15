function Entrance() {

    return <div className="row justify-content-center">
        <div className="col-md-6 ofse-md-3">
            <h2 className="text-center text-primary">Graphql SPA</h2>
            <div className='d-flex flex-row justify-content-center m-3 text-secondary'>
                <h4>with apollo server and </h4>
                <img src="/mongo.png" alt="mongodb" width="30" className='mx-2' />
                <h4>Mongoose</h4>
            </div>
            <div className='d-flex flex-row justify-content-center m-3 text-secondary'>
                <h4>and apollo client and </h4>
                <img src="/react.png" alt="react" width="30" className='mx-2' />
                <h4>ReactJs</h4>
            </div>
            <div className='d-flex flex-row justify-content-center m-3 text-secondary'>
                <h4>styled with </h4>
                <img src="/Bootswatch.svg" alt="Bootswatch" width="30" className='mx-2' />
                <h4>Bootswatch</h4>
            </div>
        </div>
    </div>
}

export default Entrance;