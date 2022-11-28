import { useEffect, useState } from "react";
import { handleFilter } from "../../utils";
import RadioCheck from "./RadioCheck";
import Search from "./Search";

const Filter = ({ data, setData }) => {
    const [originalData, setOriginalData] = useState(data)
    const [dataModified, setDataModified] = useState(data);
    const [dataFilters, setDataFilters] = useState({
        order: 0,
        name: "",
        type: [],
    });

    let arrInitType = [];
    let filterType = [];
    const filterOrder = [
        { name: 'Menor a mayor precio', active: true, id: "minMax", nameRadio: "radio" },
        { name: 'Mayor a menor precio', active: false, id: "maxMin", nameRadio: "radio" },
    ];

    Object.entries(originalData.products).map(([, value]) => {
        if (!arrInitType.includes(value.type)) {
            arrInitType.push(value.type);
        }
    });
    arrInitType.sort();
    arrInitType.forEach(e => {
        filterType.push({
            name: e,
            active: false,
            id: e,
            nameRadio: "checkbox"
        });
    });

    useEffect(() => {
        let dataFil = originalData.products.filter(fil => {
            let nameProduct = fil.name.toLowerCase();
            let str = dataFilters.name.toLowerCase();

            let typeFilter = (dataFilters.type.length > 0) ? dataFilters.type.includes(fil.type) : true;
            let nameFilter = (dataFilters.name.length > 0) ? nameProduct.includes(str) : true;
            return typeFilter && nameFilter;
        });
        dataFil = dataFil.sort((a, b) => {
            if (dataFilters.order == 0) return a.unit_price - b.unit_price;
            if (dataFilters.order == 1) return b.unit_price - a.unit_price;
        });
        setData({ products: dataFil });
    }, [dataFilters.order, dataFilters.type, dataFilters.name])

    return (
        <div className="container flex flex-row place-content-center p-3 filters results__content xs:flex-col !gap-1">
            <RadioCheck position={0} type="radio" arrFilter={filterOrder} onHandleFilter={handleFilter} filterType={'filterOrder'} data={dataFilters} setData={setDataFilters} title={'Ordenar por precio'} />
            <RadioCheck position={1} type="checkbox" arrFilter={filterType} onHandleFilter={handleFilter} filterType={'filterType'} data={dataFilters} setData={setDataFilters} title={'Categorias'} />
            <Search dataFilters={dataFilters} setDataFilters={setDataFilters} />
        </div>
    )
}

export default Filter