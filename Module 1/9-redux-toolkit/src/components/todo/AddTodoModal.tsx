import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAddTodoMutation } from "@/redux/query/TodoQuery"
// import { useAppDispatch } from "@/redux/hooks/hook"
import { DialogClose } from "@radix-ui/react-dialog"
import { useEffect, useState } from "react"

export function AddTodoModal({ todoRefetch }) {
    const [addTodo, { data, isLoading, isError, isSuccess }] = useAddTodoMutation();
    const [priority, setPriority] = useState('');
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    // const dispatch = useAppDispatch();
    const handleSubmit = (e: React.FormEvent) => {
        // const randomString = Math.random().toString().substring(2,);
        const taskDetails = {
            // id: randomString,
            title: task,
            description,
            priority,
            isCompleted: false,
        }
        e.preventDefault();
        //!Server call
        addTodo(taskDetails)
    }

    // useEffect(() => {
    //     if (isSuccess) {
    //         todoRefetch();
    //     }
    // }, [isSuccess])
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Add Todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Add your task details below
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="task" className="text-right">
                            Task
                        </Label>
                        <Input
                            id="task"
                            className="col-span-3"
                            onBlur={(e) => setTask(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input
                            id="description"
                            className="col-span-3"
                            onBlur={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Priority
                        </Label>
                        <Select onValueChange={(value) => setPriority(value)}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select Priority" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Priority</SelectLabel>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex justify-end">
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
