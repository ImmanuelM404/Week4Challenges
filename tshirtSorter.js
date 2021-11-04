// Write your solution below:

    function tshirt(str) {
        let small = ""
        let medium = ""
        let large = ""
      
        for (let i = 0; i < str.length; i++) {
          if (str[i] === "s") {
            small += "s"
          } else if (str[i] === "m") {
            medium += "m"
          } else {
            large += "l"
          }
        }
        return small + medium + large
      }
    


tshirt('mmsllsssl')
console.log(tshirt('mmsllsssl'))