export const validProductsFile = (file) => {
    if (file.type != "application/json" || file.length < 1) {
        return false;
    }
    return true;
}

export const parseJsonFile = async (file) => {
    if (!validProductsFile(file)) return false;
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = event => resolve(JSON.parse(event.target.result));
        fileReader.onerror = error => reject(error);
        fileReader.readAsText(file);
    })
}

// Filter select
export const handleFilter = (checked, title, i, value, data, setData) => {
    console.log(value);
    switch (title) {
        case 'filterOrder':
            setData({
                ...data,
                order: parseInt(value)
            });
            break;
        case 'filterType':
            if (checked == true) {
                setData({
                    ...data,
                    type: [...data.type, value]
                });
                break;
            }
            setData({
                ...data,
                type: data.type.filter(t => t != value)
            });
            break;
        default:
            break;
    }
}

export const createOrderJson = (data) => {
    const json = {
        name: `Orden #${parseInt(Math.random() * (9999 - 1000) + 1000)}`,
        total: calculateTotalAndQuantity(data)[0],
        quantity: calculateTotalAndQuantity(data)[1],
        products: data,
    };
    console.log(json);
    return JSON.stringify(json);
}

const calculateTotalAndQuantity = (data) => {
    if (data) {
        let total = 0;
        let quantityProducts = 0;
        data.forEach(elm => {
            total = total + (elm.unit_price * elm.quantity);
            quantityProducts = quantityProducts + elm.quantity;
        });
        return [total, quantityProducts];
    }
}