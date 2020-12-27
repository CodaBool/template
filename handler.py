def hello(event, context):
    print('context', context)
    return {
        "message": "python lambda test",
        "event": event
    }