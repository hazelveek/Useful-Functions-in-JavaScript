
/**
 * Convert Firebase Snapshot To Array in Javascript
 * 
 * @param {FirebaseDataSnapshot} snapshot
 * @return {Array} val() Object with two method val() which is the array of data in the snapshot
 * @return {number} numChldren() retuns the number of elements in the val() array
 */
function firebaseSnapshotToArray(snapshot, ischild = false){
  let numChildren = snapshot.numChildren();
  let arraySnap = Array();
  for(childSnap of snapshot){
    let data = childSnap.val();
    data.key = childSnap.key();
    if(typeof data === 'object'){
      data = firebaseSnapshotToArray(childSnap).val();
    }
    arraySnap.push(data);
  }
  if(ischild) return arraySnap;

  return {
    val: () => {
      return arraySnap
    },
    numChildren: () => {
      return numChildren;
    }
  }
}  