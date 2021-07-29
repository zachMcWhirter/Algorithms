const compareArrays = (existingArr, multiArr) => {
    existingArr = getUsersByTeamId.data.data.map(i => i.id).sort((a, b) => a - b)
        // existing list of PHAs (before adding or removing anyone) sorted in ascending order
    
    multiArr = multiselect1.value.sort((a, b) => a - b);
        // new list of PHAs after (adding or removing) sorted in ascending order
    
    let addArray = [];
        // array to store values to be added
    
    for(let i = 0; i < multiArr.length; i++) {
        // Loop for array1
        for(let j = 0; j < existingArr.length; j++) {
                  // Loop for array2
            if(multiArr[i] === existingArr[j]) {
                // Find the elements of multiArr that do exist in existingArr
                existingArr.slice(j, 1);
              return;
                  //  pop it off the existingArr
            } else if (j === existingArr.length - 1) {
                // Find the elements of existingArr that do not exist in multiArr
              addArray.push(multiArr[i]);
              return;
                  // add them to the removeArray
            } else {

              return;
                  // if the existing array hasn't been changed then just return
            }
        }
    }
    
      Promise.all(
      addArray.map(id => addUserToTeam(id)), existingArr.map(id => removeUserFromTeam(id))
    ).then(res => res)    
    
  };