import React from 'react'
import Container from '../container'
import styled from 'styled-components'
import NetlifyContact from '../netlify-contact'

const StyledSection = styled.section`
  font-family: montserrat, sans-serif;
  padding: 1em 0 3em 0;
  h2 {
    text-align: center;
    padding: 1em;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    .contact-info {
      font-size: 1.2em;
      flex: 1 1 0;
      margin-top: 18px;
      table {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.5);
        th,
        td {
          padding: 2px 10px;
          font-size: 0.9em;
        }
      }
    }

    & > div {
      flex: 2 2 0;
      min-width: 330px;
    }

    form {
      border: 1px solid #ccc;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
      background: rgba(255, 255, 255, 0.5);
      strong {
        font-size: 1.2em;
      }
      input {
        padding: 0.2em 1em;
      }
      textarea {
        padding: 0.2em 1em;
      }
    }
  }
`

const Contact = () => (
  <StyledSection>
    <Container>
      <h2>
        What are you waiting for? Contact us to set up your free consultation
        today!
      </h2>
      <div className="columns">
        <div className="contact-info">
          <p>
            <strong>Phone:</strong> 978-729-2187
          </p>
          <p>
            <strong>Email:</strong> hello@oakpoint.io
          </p>
          <p>
            <strong>Business hours:</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <th>Day</th>
                <th>Open</th>
                <th>Close</th>
              </tr>
              <tr>
                <td>Monday</td>
                <td>8:00 AM</td>
                <td>6:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>8:00 AM</td>
                <td>6:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>8:00 AM</td>
                <td>6:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>8:00 AM</td>
                <td>6:00 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>8:00 AM</td>
                <td>6:00 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10:00 AM</td>
                <td>4:00 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Closed</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <NetlifyContact />
      </div>
    </Container>
  </StyledSection>
)

export default Contact
