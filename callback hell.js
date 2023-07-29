async function fetchData() {
    try {
      const result1 = await asyncFunction1();
      console.log('Result 1:', result1);
      
      const result2 = await asyncFunction2(result1);
      console.log('Result 2:', result2);
      
      const result3 = await asyncFunction3(result2);
      console.log('Result 3:', result3);
  
      // More code...
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
  