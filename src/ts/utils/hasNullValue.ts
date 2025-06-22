export function hasOneNotNullValue(obj: any){


  if (obj instanceof FormData) {
    for (const [k, v] of obj) {
        if (typeof v == "string") {
            if(! (v == "")) {
              return true
            }
        } else {
          const value = v as any 

          if(value.size > 0) {
            return true
          }

        }
    }
  }

  return false;
}


export function hasNullValue (obj: any)  {
  if (obj instanceof FormData) {
    for (const [k, v] of obj) {
      const value = v as any;
      if (value == "") return true;
      if (value.size == 0) {
        return true;
      }
    }
  } else {
    for (const [k, v] of Object.entries(obj)) {
      const value = v as any;
      if( value == "") return true;
  
      if (value.size == 0) {
        return true;
      }

    }
  }

   return false
};
