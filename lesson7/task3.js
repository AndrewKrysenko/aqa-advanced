function divide(numerator, denominator){
    if(denominator === 0){
        throw new Error("На нуль ділити не можна");
    }
    else if(typeof numerator !== "number" || typeof denominator !== "number"){
        throw new Error("Тільки числа можна ділити");
    }
    else if(isNaN(numerator) || isNaN(denominator)){
        throw new Error("Тільки числа можна ділити");
    }
    let result = numerator / denominator;
    return result;}

try {
    console.log(divide(10, 2));}
    catch (error) {
    console.log(error.message);
    }
    finally{
    console.log("Робота завершена");
    }
try{
    console.log(divide(10, 0));}
    catch (error) {
    console.log("Виникла помилка:");
    console.log(error.message);
    }
    finally{
    console.log("Робота завершена");
    }
try{    
    console.log(divide(10, "a"));}
    catch (error) {
    console.log("Виникла помилка:");
    console.log(error.message);
    }
    finally{
    console.log("Робота завершена");
    }
try {
    console.log(divide("b", 10));}
    catch (error) {
    console.log("Виникла помилка:");
    console.log(error.message);
    }
    finally{
    console.log("Робота завершена");
    }