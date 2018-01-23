import test from 'ava'
import request from 'supertest'

import app from '../../server'

test.todo('Invalid user body receives a 422 error from user API')
test.todo('Valid user body receives 200 from user API')