import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { fetchViewings, saveNewViewing, removeViewing } from '../services/viewingsApi';