/**
 * configuration file
 */

module.exports = {
  API_URL: process.env.API_URL || 'http://localhost:3000',
  // API_URL: process.env.API_URL || 'https://lit-earth-25873.herokuapp.com'
  TOKEN: {
    M2M_R: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiOWVHUjFaS2VXV2dhcU94ZXpwREc5WDdwODFhZzg4UG5AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNTQ4NjQ3MTQ2LCJleHAiOjE1NTg3MzM1NDYsImF6cCI6IjllR1IxWktlV1dnYXFPeGV6cERHOVg3cDgxYWc4OFBuIiwic2NvcGUiOiJyZWFkOmdyb3VwcyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.MV8DdrXAZ31Yg5E0xKfr8g2JJH-dueljFoXw-LRr58o',
    M2M_W: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiOWVHUjFaS2VXV2dhcU94ZXpwREc5WDdwODFhZzg4UG5AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNTQ4NjQ3MTQ2LCJleHAiOjE1NTg3MzM1NDYsImF6cCI6IjllR1IxWktlV1dnYXFPeGV6cERHOVg3cDgxYWc4OFBuIiwic2NvcGUiOiJ3cml0ZTpncm91cHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.d4yAlA0IE7c2V6eia_FJk0lwC0d_SytNQ5Wb1aM_YQI',
    ADMIN: {
      USER1: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJUb3Bjb2RlciBVc2VyIiwiYWRtaW5pc3RyYXRvciJdLCJpc3MiOiJodHRwczovL2FwaS50b3Bjb2Rlci5jb20iLCJoYW5kbGUiOiJ1c2VyMSIsImV4cCI6MTY0NjA0MjY1NywidXNlcklkIjoiMTIzNDUiLCJpYXQiOjE1NDg2NDIwNTcsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwianRpIjoiMmU2NDhmODctMjJiOS00ZDc5LWE4MjEtODNkZmIyODUzMmIwIn0.wn8ibMMcSpB_nCgkx5Mnl3oozOe_ni76mKtG-CdQwXE'
    },
    USER: {
      USER2: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJUb3Bjb2RlciBVc2VyIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLmNvbSIsImhhbmRsZSI6InVzZXIyIiwiZXhwIjoxNjQ2MDQyNjU3LCJ1c2VySWQiOiIxMjM0NiIsImlhdCI6MTU0ODY0MjA1NywiZW1haWwiOiJ1c2VyMkBnbWFpbC5jb20iLCJqdGkiOiIyZTY0OGY4Ny0yMmI5LTRkNzktYTgyMS04M2RmYjI4NTMyYjEifQ.6zOqM9fjB6k1hZkCBUb2fE9rOauNdPPyfPCP18v3vmw',
      USER4: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJUb3Bjb2RlciBVc2VyIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLmNvbSIsImhhbmRsZSI6InVzZXI0IiwiZXhwIjoxNjQ2MDQyNjU3LCJ1c2VySWQiOiIxMjM0OCIsImlhdCI6MTU0ODY0MjA1NywiZW1haWwiOiJ1c2VyNEBnbWFpbC5jb20iLCJqdGkiOiIyZTY0OGY4Ny0yMmI5LTRkNzktYTgyMS04M2RmYjI4NTMyYjMifQ._k0ujEoh5rUykRKEy821L8473ZYG7XwbP4-W5oC9xkg'
    }
  }
}
