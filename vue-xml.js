exports.toXml = (data) => {
    let xml = '';
    for(let [property,value] of Object.entries(data)){
        xml += `<${property}>${value}</${property}>`;
    }
    return xml;
}