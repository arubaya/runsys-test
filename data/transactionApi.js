import api from './api';

export const getAllTransaction = () => api
.get('/get-all-transaction')
.then(function (response) {
  return response;
})
.catch(function (error) {
  console.log(error);
});

export const getDetailTransactionById = (params) => api
.get(`/get-transaction/id/${params}`)
.then(function (response) {
  return response;
})
.catch(function (error) {
  console.log(error);
});

export const saveTransaction = (data) => api
.post('/save-transaction', data)
.then(function (response) {
  return response;
})
.catch(function (error) {
  console.log(error);
});

export const updateTransaction = (data) => api
.put('/update-transaction', data)
.then(function (response) {
  return response;
})
.catch(function (error) {
  console.log(error);
});

export const deleteTransaction = (data) => api
.delete('/delete-transaction', data)
.then(function (response) {
  return response;
})
.catch(function (error) {
  console.log(error);
});