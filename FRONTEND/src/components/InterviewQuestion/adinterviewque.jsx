import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions = [
  {
    question: "1. What is an Activity in Android?",
    answer: "An Activity represents a single screen with a user interface in an Android app.",
    explanation: "It serves as the entry point for user interaction and manages the UI components.",
    code: `public class MainActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
  }
}`
  },
  {
    question: "2. What is a Fragment in Android?",
    answer: "A Fragment represents a reusable portion of the app's UI.",
    explanation: "Fragments allow modular UI design and can be combined within activities.",
    code: `public class ExampleFragment extends Fragment {
  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
                           Bundle savedInstanceState) {
    return inflater.inflate(R.layout.fragment_example, container, false);
  }
}`
  },
  {
    question: "3. What is the AndroidManifest.xml file?",
    answer: "It's a configuration file that declares essential information about the app.",
    explanation: "It includes components, permissions, and other app-level configurations.",
    code: `<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">
  <application
    android:allowBackup="true"
    android:label="@string/app_name">
    <activity android:name=".MainActivity">
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
    </activity>
  </application>
</manifest>`
  },
  {
    question: "4. What is the difference between onCreate() and onStart() in Activity lifecycle?",
    answer: "onCreate() is called when the activity is first created; onStart() is called when the activity becomes visible.",
    explanation: "onCreate() is used for initial setup, while onStart() prepares the activity to interact with the user.",
    code: `@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  // Initialization code
}

@Override
protected void onStart() {
  super.onStart();
  // Activity is about to become visible
}`
  },
  {
    question: "5. What is an Intent in Android?",
    answer: "An Intent is a messaging object used to request an action from another app component.",
    explanation: "Intents facilitate communication between components, such as starting activities or services.",
    code: `Intent intent = new Intent(this, SecondActivity.class);
startActivity(intent);`
  },
  {
    question: "6. What is the difference between implicit and explicit intents?",
    answer: "Explicit intents specify the component to start; implicit intents declare a general action to perform.",
    explanation: "Explicit intents are used within the app; implicit intents can invoke components from other apps.",
    code: `// Explicit Intent
Intent intent = new Intent(this, SecondActivity.class);
startActivity(intent);

// Implicit Intent
Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://www.example.com"));
startActivity(intent);`
  },
  {
    question: "7. What is a Service in Android?",
    answer: "A Service is a component that performs long-running operations in the background.",
    explanation: "Services do not provide a user interface and can run even if the app is not in the foreground.",
    code: `public class MyService extends Service {
  @Override
  public int onStartCommand(Intent intent, int flags, int startId) {
    // Service logic
    return START_STICKY;
  }

  @Override
  public IBinder onBind(Intent intent) {
    return null;
  }
}`
  },
  {
    question: "8. What is the difference between Service and IntentService?",
    answer: "IntentService handles asynchronous requests on demand; Service runs on the main thread.",
    explanation: "IntentService processes intents sequentially in a background thread and stops itself when done.",
    code: `public class MyIntentService extends IntentService {
  public MyIntentService() {
    super("MyIntentService");
  }

  @Override
  protected void onHandleIntent(Intent intent) {
    // Handle intent
  }
}`
  },
  {
    question: "9. What is a BroadcastReceiver in Android?",
    answer: "A BroadcastReceiver responds to system-wide broadcast announcements.",
    explanation: "It allows the app to listen for specific intents broadcasted by the system or other apps.",
    code: `public class MyReceiver extends BroadcastReceiver {
  @Override
  public void onReceive(Context context, Intent intent) {
    // Handle broadcast
  }
}

// Registering in code
IntentFilter filter = new IntentFilter(Intent.ACTION_BOOT_COMPLETED);
registerReceiver(new MyReceiver(), filter);`
  },
  {
    question: "10. What is the role of ViewModel in Android Architecture Components?",
    answer: "ViewModel stores and manages UI-related data in a lifecycle-conscious way.",
    explanation: "It allows data to survive configuration changes such as screen rotations.",
    code: `public class MyViewModel extends ViewModel {
  private MutableLiveData<String> data;

  public LiveData<String> getData() {
    if (data == null) {
      data = new MutableLiveData<>();
      // Load data
    }
    return data;
  }
}`
  },
  {
    question: "11. What is LiveData in Android?",
    answer: "LiveData is an observable data holder class that is lifecycle-aware.",
    explanation: "It updates observers when the data changes and respects the lifecycle of app components.",
    code: `LiveData<String> liveData = myViewModel.getData();
liveData.observe(this, newData -> {
  // Update UI
});`
  },
  {
    question: "12. What is the difference between RecyclerView and ListView?",
    answer: "RecyclerView is a more advanced and flexible version of ListView.",
    explanation: "RecyclerView supports layout managers, item animations, and view recycling more efficiently.",
    code: `RecyclerView recyclerView = findViewById(R.id.recyclerView);
recyclerView.setLayoutManager(new LinearLayoutManager(this));
recyclerView.setAdapter(new MyAdapter(dataList));`
  },
  {
    question: "13. What is the purpose of the Room Persistence Library?",
    answer: "Room provides an abstraction layer over SQLite to allow fluent database access.",
    explanation: "It simplifies database operations and integrates with LiveData and ViewModel.",
    code: `@Entity
public class User {
  @PrimaryKey
  public int uid;
  public String name;
}

@Dao
public interface UserDao {
  @Query("SELECT * FROM user")
  List<User> getAll();
}

@Database(entities = {User.class}, version = 1)
public abstract class AppDatabase extends RoomDatabase {
  public abstract UserDao userDao();
}` 
  },
  {
    question: "14. What is the difference between Serializable and Parcelable?",
    answer: "Parcelable is Android's optimized serialization mechanism; Serializable is a standard Java interface.",
    explanation: "Parcelable is faster and recommended for Android inter-process communication.",
    code: `public class MyData implements Parcelable {
  private int data;

  protected MyData(Parcel in) {
    data = in.readInt();
  }

  public static final Creator<MyData> CREATOR = new Creator<MyData>() {
    @Override
    public MyData createFromParcel(Parcel in) {
      return new MyData(in);
    }

    @Override
    public MyData[] newArray(int size) {
      return new MyData[size];
    }
  };

  @Override
  public void writeToParcel(Parcel dest, int flags) {
    dest.writeInt(data);
  }

  @Override
  public int describeContents() {
    return 0;
  }
}`
  },
  {
    question: "15. What is the use of Handler in Android?",
    answer: "Handler allows you to send and process Message and Runnable objects associated with a thread's MessageQueue.",
    explanation: "It's commonly used to perform operations on the UI thread from background threads.",
    code: `Handler handler = new Handler(Looper.getMainLooper());
handler.post(() -> {
  // Update UI
});`
  },
  {
    question: "16. What is ANR in Android, and how can it be prevented?",
    answer: "ANR stands for Application Not Responding; it occurs when the UI thread is blocked for too long.",
    explanation: "To prevent ANR, avoid long operations on the main thread by using background threads or AsyncTask.",
    code: `new Thread(() -> {
  // Long-running operation
  runOnUiThread(() -> {
    // Update UI
  });
}).start();`
  },
  {
    question: "17. What is the difference between dp, sp, and px in Android?",
    answer: "dp (density-independent pixels) and sp (scale-independent pixels) are scalable units; px is a pixel.",
    explanation: "dp is used for layout dimensions; sp is used for font sizes to respect user preferences.",
    code: `TextView textView = findViewById(R.id.textView);
textView.setTextSize(TypedValue.COMPLEX_UNIT_SP, 16);`
  },
  {
    question: "18. What is the purpose of the ConstraintLayout?",
    answer: "ConstraintLayout allows you to create complex layouts with a flat view hierarchy.",
    explanation: "It improves performance by reducing the number of nested views.",
    code: `<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    ... >
  <Button
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:layout_constraintTop_toTopOf="parent"
    app:layout_constraintStart_toStartOf="parent" />
</androidx.constraintlayout.widget.ConstraintLayout>`
  },
  {
    question: "19. What is the use of ProGuard in Android?",
    answer: "ProGuard shrinks, optimizes, and obfuscates your code by removing unused code and renaming classes.",
    explanation: "It helps to reduce the size of the APK and makes reverse engineering more difficult.",
    code: `// In build.gradle
buildTypes {
  release {
    minifyEnabled true
    proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
  }
}`
  },

    {
      question: "20. What is the difference between compileSdkVersion and targetSdkVersion?",
      answer: "compileSdkVersion is the API level used to compile your app. targetSdkVersion is the API level your app is optimized for.",
      explanation: "Setting targetSdkVersion lets Android know you’ve tested your app on that version. Higher compileSdkVersion allows access to newer APIs.",
      code: `android {
    compileSdkVersion 33
  
    defaultConfig {
      targetSdkVersion 33
      minSdkVersion 21
    }
  }`
    },
    {
      question: "21. What is the role of Gradle in Android development?",
      answer: "Gradle is the build automation system used in Android Studio.",
      explanation: "It handles compiling, packaging, and managing dependencies of Android apps.",
      code: `dependencies {
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'com.google.android.material:material:1.9.0'
  }`
    },
    {
      question: "22. What is Data Binding in Android?",
      answer: "Data Binding allows you to bind UI components directly to data sources in XML.",
      explanation: "It reduces boilerplate code and improves separation of concerns.",
      code: `<layout xmlns:android="http://schemas.android.com/apk/res/android">
    <data>
      <variable
        name="user"
        type="com.example.User" />
    </data>
    <TextView
      android:text="@{user.name}" />
  </layout>`
    },
    {
      question: "23. What is the use of WorkManager in Android?",
      answer: "WorkManager is used to schedule deferrable, guaranteed background work.",
      explanation: "It’s part of Android Jetpack and works even if the app exits or device restarts.",
      code: `WorkRequest workRequest = new OneTimeWorkRequest.Builder(MyWorker.class).build();
  WorkManager.getInstance(context).enqueue(workRequest);`
    },
    {
      question: "24. What are PendingIntents in Android?",
      answer: "A PendingIntent is a token that allows another app or the system to execute your app’s code at a later time.",
      explanation: "It’s commonly used in notifications and alarm managers.",
      code: `Intent intent = new Intent(this, MyReceiver.class);
  PendingIntent pendingIntent = PendingIntent.getBroadcast(this, 0, intent, PendingIntent.FLAG_IMMUTABLE);`
    },
    {
      question: "25. What is Jetpack Compose?",
      answer: "Jetpack Compose is a modern toolkit for building native UI in Android using Kotlin.",
      explanation: "It simplifies and accelerates UI development with less code and powerful tools.",
      code: `@Composable
  fun Greeting(name: String) {
    Text(text = "Hello, $name!")
  }` 
    },
    {
      question: "26. What is the difference between View.GONE and View.INVISIBLE?",
      answer: "View.GONE hides the view and removes it from layout; View.INVISIBLE hides it but reserves the space.",
      explanation: "Use GONE when you don't want the view to take up space in layout.",
      code: `view.visibility = View.GONE; // no space
  view.visibility = View.INVISIBLE; // takes space but not visible`
    },
    {
      question: "27. What is Android Jetpack?",
      answer: "Android Jetpack is a set of libraries, tools, and architectural guidance for modern Android development.",
      explanation: "It includes components like Navigation, LiveData, ViewModel, Room, WorkManager, and more.",
      code: `dependencies {
    implementation "androidx.lifecycle:lifecycle-viewmodel-ktx:2.6.1"
    implementation "androidx.navigation:navigation-fragment-ktx:2.5.3"
  }`
    },
    {
      question: "28. What is the purpose of Navigation Component in Jetpack?",
      answer: "It simplifies navigation between fragments and activities and manages the back stack.",
      explanation: "Navigation Component provides a visual editor and handles arguments and deep links.",
      code: `NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment);
  navController.navigate(R.id.action_first_to_second);`
    },
    {
      question: "29. How do you store data permanently in Android?",
      answer: "You can store data using SharedPreferences, SQLite, Room, or files.",
      explanation: "Use SharedPreferences for small key-value pairs and Room/SQLite for structured data.",
      code: `SharedPreferences prefs = getSharedPreferences("MyPrefs", MODE_PRIVATE);
  SharedPreferences.Editor editor = prefs.edit();
  editor.putString("username", "divya");
  editor.apply();`
    },
    {
      question: "30. What are Content Providers in Android?",
      answer: "Content Providers manage access to a structured set of data.",
      explanation: "They are used to share data between different apps using a standard interface.",
      code: `Cursor cursor = getContentResolver().query(
    ContactsContract.Contacts.CONTENT_URI,
    null, null, null, null
  );`
    }
  ];
  

      
  
export default function AdInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
             Android Development Interview Questions
            </h1>
  
            {questions.map((q, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-blue-500 hover:shadow-2xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                   {q.question}
                </h2>
  
                <p className="text-green-700 font-medium mb-2">
                <span className="font-semibold">Answer:</span> {q.answer}
                </p>
  
                <p className="text-gray-700 mb-3">
                <span className="font-semibold">Explanation:</span> {q.explanation}
                </p>
  
                <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-auto whitespace-pre-wrap">
                  <pre>
                    <code>{q.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  