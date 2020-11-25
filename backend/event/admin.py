from django.contrib import admin
from .models import (
    Category,
    Faq,
    Favorites,
    Location,
    MySchedule,
    Presenter,
    Schedule,
    Sponsor,
    Vendor,
    VendorDetail,
)

admin.site.register(Faq)
admin.site.register(Location)
admin.site.register(VendorDetail)
admin.site.register(MySchedule)
admin.site.register(Presenter)
admin.site.register(Schedule)
admin.site.register(Category)
admin.site.register(Favorites)
admin.site.register(Vendor)
admin.site.register(Sponsor)

# Register your models here.
