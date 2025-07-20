import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { eventServices } from './event.services';

//Crete Event
const createEvent = catchAsync(async (req, res) => {
  const result = await eventServices.createEventIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Event Created successfully',
    data: result,
  });
});

//Delte Event
const deleteEvent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await eventServices.deleteEventIntoDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Event Deleted successfully',
    data: result,
  });
});

//Delte Event
const updatedEvent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await eventServices.updateEventIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Event Updated successfully',
    data: result,
  });
});

//Get All  Event
const getAllEvent = catchAsync(async (req, res) => {
  const result = await eventServices.getAllEventIntoDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Events Retrived Successfully',
    data: result,
  });
});

// archieved  Event
const archivedEvent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await eventServices.archivedEventIntoDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Events Archieved Successfully',
    data: result,
  });
});

export const eventControllers = {
  createEvent,
  deleteEvent,
  updatedEvent,
  getAllEvent,
  archivedEvent,
};
