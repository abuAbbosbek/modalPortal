interface IDataType{ 
    id: number; 
    color: string; 
    price: string; 
    aksiya: number; 
    count: number; 
    img: string; 
 
} 
 
export interface IData { 
    id: number; 
    text: string; 
    img: string; 
    type: IDataType[]; 
} 
export const data: IData[] = [ 
    { 
        id: 1, 
        text: "Bolalar uchun yumshoq o'yinchog'i, Lilo va Stitch sovg'a uchun, moviy va pushti ranglar", 
        img: "https://ih1.redbubble.net/image.2355672538.9399/flat,750x,075,f-pad,750x1000,f8f8f8.jpg", 
        type: [ 
            { 
                id: 0, 
                color: "moviy", 
                price: "200 000", 
                aksiya:2, 
                count: 10, 
                img: "https://ih1.redbubble.net/image.2836341308.6364/flat,750x,075,f-pad,750x1000,f8f8f8.jpg", 
            }, 
            { 
                id: 1, 
                color: "qizil", 
                price: "300 000", 
                aksiya: 2, 
                count: 2, 
                img: "https://cdn.inspireuplift.com/uploads/images/seller_products/1689849782_MR-207202317430-qualityperfectionus-digital-download-lilo-stitch-angel-image-1.jpg", 
            }, 
            { 
                id: 2, 
                color: "pushti", 
                price: "400 000", 
                aksiya: 2, 
                count: 5, 
                img: "https://www.cutoutsandcollectables.co.uk/wp-content/uploads/2023/06/SC4290-Angel-Lilo-Stitch-Official-Medium-Mini-Cardboard-Cutout-Standee.webp", 
            }, 
        ], 
    }, 
];