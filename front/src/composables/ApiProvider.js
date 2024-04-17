import { Notify } from 'quasar'
import { api } from 'src/boot/axios'

export async function getAllPlats(){
  const request = await api.get(`plats`)
  .catch( error =>  {
      Notify.create({
        type: 'warning',
        message :  'error : '+ error.message,
      })
    })
    return request.data['hydra:member']

}

export async function getThisPlat(id){
  const request = await api.get(`plats/${id}`)
  .catch( error =>  {
      Notify.create({
        type: 'warning',
        message :  'error : '+ error.message,
      })
    })
    return request.data['hydra:member']
}

export async function addNewPlat(plat){
  const request = await api.post('plats', plat)
  .catch( (error) =>  {
    Notify.create({
      type: 'warning',
      message :  'error : '+ error.message,
    })
  })

}

export async function updatThisPlat(plat){
  const request = await api.put('plats', plat)
  .catch( (error) =>  {
    Notify.create({
      type: 'warning',
      message :  'error : '+ error.message,
    })
  })

}

export async function deleteThisPlat(id){
  const request = await api.delete(`plats/${id}`)
  .catch( error =>  {
      Notify.create({
        type: 'warning',
        message :  'error : '+ error.message,
      })
    })
    return request.data['hydra:member']
}
