//1. Create interface
interface OfficeInternetAccess {  
    grantInternetAccess(): void  
}  

//2. Create the real object which implements the interface
class RealInternetAccess implements OfficeInternetAccess {  
    private employeeName: string;  
    public RealInternetAccess(empName) {  
        this.employeeName = empName;  
    }  
      
    public grantInternetAccess() {  
        console.log("Internet Access granted for employee: "+ this.employeeName);  
    }  
}  

//3. Create the proxy class which is identical to the real object and also implements the interface
class ProxyInternetAccess implements OfficeInternetAccess {  
    private employeeName: string;  
    public ProxyInternetAccess(employeeName) {  
     this.employeeName = employeeName;  
 }
 public grantInternetAccess() {  
    console.log("Internet Access granted for employee: "+ this.employeeName);  
}  
   
}

//4. Create the client
class ProxyPatternClient {  
    public main(){  
       console.log("This is the client")
    }  
} 

console.log('Client: Executing the client code with a real subject:');
const RealInternetAccess = new RealInternetAccess();
ProxyPatternClient (RealInternetAccess);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const ProxyInternetAccess = new ProxyInternetAccess(RealInternetAccess);
ProxyPatternClient(proxy);
 