var pdvModule =  require('../models/pvd');

module.exports = () =>{
    return {
        add: async (item) =>{
            var pdv = new pdvModule();
            pdv.id = await pdvModule.find().count() + 1;
            pdv.tradingName = item.tradingName;
            pdv.ownerName =  item.ownerName;
            pdv.document = item.document;

            var coordinates = [];

            pdv.coverageArea = { type: item.coverageArea.type, coordinates: [] };

            item.coverageArea.coordinates.forEach(element => {
                if(item.coverageArea.type === 'MultiPolygon'){
                    var subcoordinates = [];
                    element.forEach(subelement => {
                        var cord = [];
                        cord.push(subelement);
                        pdv.coverageArea.coordinates.push(cord);
                    });
                }else {
                    var cord = [];
                    cord.push(element[0]);
                    cord.push(element[1]);
                    pdv.coverageArea.coordinates.push(cord);
                }
            });
            pdv.address = { type: item.address.type, coordinates: item.address.coordinates }

            return await pdv.save((error,doc)=>{
                if(error){
                    return error;
                }
                return doc;
            });
        },
        findById: async (id) =>{
            return await pdvModule.findOne({id:id}).then((result)=>{
                return result;
            }).catch((error)=>{
                console.log(`[error]:[findById]:${error}`);
            })
        },
        search: async (lng,lat) =>{
            pdvModule.findById({id:id}).then((result)=>{
                return result;
            }).catch((error)=>{
                console.log(`[error]:[findById]:${error}`);
            })
        }
    }
}