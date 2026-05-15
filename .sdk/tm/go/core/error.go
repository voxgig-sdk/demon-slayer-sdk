package core

type DemonSlayerError struct {
	IsDemonSlayerError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewDemonSlayerError(code string, msg string, ctx *Context) *DemonSlayerError {
	return &DemonSlayerError{
		IsDemonSlayerError: true,
		Sdk:              "DemonSlayer",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *DemonSlayerError) Error() string {
	return e.Msg
}
