import { Mobile } from './Mobile'
class BasicPhone extends Mobile{
    mobileType:string;

    // for initilization
    constructor( mobileId:number, mobileName:string,mobileCost:number,mobileType:string){
        super(mobileId,mobileName,mobileCost);
        this.mobileType=mobileType;
}

//for printing the mobile details
printMobileDetail():void{
    super.printMobileDetail();
        console.log("MobileType="+this.mobileType);
}
}
