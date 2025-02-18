/*Assignment 4-1 Instructions: Allow multiple task entries in the Task List application*/
"use strict";

$(document).ready(() => {
	const tasks = [];

	// Click event handler for the Add Task button
	$("#add_task").click(() => {
		const textbox = $("#task");
		const task = textbox.val();
		if (task === "") {
			alert("Please enter a task.");
			textbox.focus();
		} else {
			// Split the task entry.
			const taskSplit = task.split(","); // creates an array
			for (const task of taskSplit) {
				// add task to array
				tasks.push(task);
			}

			// clear task text box and re-display tasks
			textbox.val("");
			$("#task_list").val(tasks.join("\n"));
			textbox.focus();
		}
	});

	// Click event handler for the Clear Task button
	$("#clear_tasks").click(() => {
		tasks.length = 0;
		$("#task_list").val("");
		$("#task").focus();
	});

	$("#task").focus();
});
