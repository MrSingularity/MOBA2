async function getNumberFact(number) {
    try {
        const response = await fetch(`http://numbersapi.com/${number}`);
        const fact = await response.text();
        console.log(fact);
        return fact;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Example usage:
getNumberFact(1000);
