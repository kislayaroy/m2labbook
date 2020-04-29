export class Mobile{
    mobileId:number;
    mobileName:string;
    mobileCost:number;
   // for initilization
    constructor( mobileId:number, mobileName:string,mobileCost:number){
        this.mobileId=mobileId;
        this.mobileName=mobileName;
        this.mobileCost=mobileCost;

    }
    
    //for printing the mobile details
    printMobileDetail():void{
        console.log(this.mobileId+" "+this.mobileName+" "+this.mobileCost);
        
    }

}