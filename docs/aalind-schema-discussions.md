**Sample User Object**

```json
{
    "id": 1,
    "uniqueId": "034477cf-e2f2-4df8-8d30-99cc931e6509",
    "name": "Prathap Chandra",
    "email": "prathap.moola@freecharge.com",
    "password": "1234",
    "products": {
        "midas": {
            "loan-recovery": "RM"
        },
        "supernova": {
            "credit-underwriter": "L2",
            "field-investigation": "CPA",
        }
    }
}
```

**Role to action mapping**

```json
{
    "roles": {
        "admin": {
            "actions": [
                "create_agents",
                "update_agents",
                "delete_agents",
                "assign_applications_to_agents"
            ]
        },
        "field_investigation": {
            "CPA": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "upload_documents",
                    "download_documents",
                ]
            },
            "CM": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "assign_applications_to_self",
                    "upload_documents",
                    "download_documents",
                    "approve_applications",
                    "reject_applications"
                ]
            }
        },
        "credit_underwriter": {
            "L1": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "assign_applications_to_others",
                    "provide_comments",
                    "approve_applications",
                    "reject_applications"
                ]
            },
            "L2": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "assign_applications_to_others",
                    "provide_comments",
                    "approve_applications",
                    "reject_applications"
                ]
            },
            "L3": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "assign_applications_to_others",
                    "provide_comments",
                    "approve_applications",
                    "reject_applications"
                ]
            },
            "L4": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "assign_applications_to_others",
                    "provide_comments",
                    "approve_applications",
                    "reject_applications"
                ]
            },
            "L5": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "assign_applications_to_others",
                    "provide_comments",
                    "approve_applications",
                    "reject_applications"
                ]
            },
            "L6": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "assign_applications_to_others",
                    "provide_comments",
                    "approve_applications",
                    "reject_applications"
                ]
            },
            "L7": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "assign_applications_to_others",
                    "provide_comments",
                    "approve_applications",
                    "reject_applications"
                ]
            }
        },
        "loan_recovery": {
            "RA": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "upload_documents",
                    "download_documents",
                ]
            },
            "LA": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "upload_documents",
                    "download_documents",
                ]
            },
            "RM": {
                "actions": [
                    "view_applications",
                    "edit_applications",
                    "upload_documents",
                    "download_documents",
                    "assign_applications_to_others",                    
                    "approve_applications",
                    "reject_applications"
                ]
            }
        }
    }
}
```

The actual object w.r.t to loan recovery module is below. feel free to change it if needed.
Compare the above object with below one to understand how certain terms are generalized.
Ex: ```update_case_status```, ```update_legal_statuses```, ```escalate_cases_to_legal``` are equivalent to ```edit_applications```. ```move_application_forward```, ```assign_cases_to_agents``` is equivalent to ```assign_applications_to_others``` etc.,

```json
"loan_recovery": {
    "RA": {
        "actions": [
            "view_assigned_cases",
            "update_case_status",
            "log_communication_details",
            "move_application_forward"
        ]
    },
    "LA": {
        "actions": [
            "view_relevant_cases",
            "upload_legal_documents",
            "update_legal_statuses",
            "move_application_forward"
        ]
    },
    "RM": {
        "actions": [
            "assign_cases_to_agents",
            "view_all_cases",
            "approve_cases",
            "escalate_cases_to_legal",
            "move_application_forward"
        ]
    }
}
```
