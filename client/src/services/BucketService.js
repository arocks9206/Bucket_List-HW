const baseUrl = 'http://localhost:3000/api/countries';

export default {
  getBucketList() {
    return fetch(baseUrl)
    .then(res => res.json())
  },
  postBucketListItem(payload){
   return fetch(baseUrl, {
     method: 'POST',
     body: JSON.stringify(payload),
     headers: {'Content-Type': 'application/json'}
   })
   .then(res => res.json())
  },
 updateBucketListItem(id, payload){
   return fetch(baseUrl + id, {
     method: 'PUT',
     body: JSON.stringify(payload),
     headers: {'Content-Type': 'application/json'}
   })
   .then(res => res.json())
  }
}
