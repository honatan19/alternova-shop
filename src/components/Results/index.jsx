import CardProduct from "../CardProduct"
import Filter from "../Filter"

const Results = ({ items, setItems }) => {
    return (
        <div className='results'>
            <div className='w-full border-b'>
                <Filter data={items} setData={setItems} />
            </div>
            <div className='w-full p-5'>
                <div className="results__content">
                    {(items && items != null && items.products) ?
                        items.products.map((info, i) => {
                            if (info.stock > 0) return <CardProduct key={i} data={info} position={i} />
                        })
                        :
                        <>
                            <div className="results__content-not-results">
                                <p>No se ha encontrado resultados con sus parámetros de búsqueda.</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Results