import getFormId from './getFormId'
import { getUserId } from '../auth'

const degRange = 2
const randAngle = () => Math.random()*degRange - degRange / 2

export default () => ({
  UserId: getUserId(),
	formId: getFormId(),
	rotation: randAngle(),
})